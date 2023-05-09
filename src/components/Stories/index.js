import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import StoryCard from './StoryCard';
import SortDropdown from './SortDropdown';
import LoadMoreButton from './LoadMoreButton';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [sortKey, setSortKey] = useState('score');

  useEffect(() => {
    fetchTopStories();
  }, []);

  useEffect(() => {
    sortStories();
  }, [sortKey]);

  const fetchTopStories = async (append = false) => {
    const response = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const storyIds = await response.json();
    const randomStoryIds = getRandomStoryIds(storyIds, 10);

    const storyPromises = randomStoryIds.map(async (id) => {
      const story = await fetchStory(id);
      const author = await fetchAuthor(story.by);
      return { ...story, author };
    });

    const fetchedStories = await Promise.all(storyPromises);
    fetchedStories.sort((a, b) => a.score - b.score);
    append ? setStories((prevStories) => [...prevStories, ...fetchedStories]) : setStories(fetchedStories);
  };

  const getRandomStoryIds = (storyIds, count) => {
    const randomStoryIds = [];

    // Remove story ids that have already been presented
    if (stories.length > 0) {
      const presentedStoryIds = stories.map(story => story.id)
      storyIds = storyIds.filter(id => !presentedStoryIds.includes(id))
    }

    // Get random story ids from the remaining story ids array
    while (randomStoryIds.length < count && storyIds.length > 0) {
      const randomIndex = Math.floor(Math.random() * storyIds.length);
      randomStoryIds.push(storyIds[randomIndex]);
      storyIds.splice(randomIndex, 1);
    }

    return randomStoryIds;
  };

  const fetchStory = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    return response.json();
  };

  const fetchAuthor = async (id) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/user/${id}.json`);
    return response.json();
  };
  
  const sortStories = () => {
    const sortedStories = [...stories];
    if (sortKey === 'time') {
      sortedStories.sort((a, b) => a.time - b.time);
    } else if (sortKey === 'score') {
      sortedStories.sort((a, b) => a.score - b.score);
    } else if (sortKey === 'author') {
      sortedStories.sort((a, b) => a.by.localeCompare(b.by));
    } else if (sortKey === 'karma') {
      sortedStories.sort((a, b) => a.author.karma - b.author.karma);
    }
    setStories(sortedStories);
  };

  const handleSortClick = (key) => {
    setSortKey(key);
  };


  return (
    <Container role='main'>
      <Typography
        variant="h3"
        sx={{
          my: 3,
        }}
      >
        Top Hacker News Stories
      </Typography>

      <SortDropdown onSortClick={handleSortClick} />
  
      <Grid container spacing={4}>
        {stories.map((story) => (
          <Grid item xs={12} sm={6} md={4} key={story.id}>
            <StoryCard {...story} />
          </Grid>
        ))}
      </Grid>

      <LoadMoreButton onLoadMoreClick={() => fetchTopStories(true)} />
    </Container>
  );
};

export default Stories;
