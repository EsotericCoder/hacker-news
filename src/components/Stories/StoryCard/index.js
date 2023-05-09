import React from 'react';
import { Avatar, Box, Card, CardContent, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Typography } from '@mui/material';

const StoryCard = (story) => {
  return (
    <a
      href={story.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{textDecoration: 'none'}}
      
    >
      <Card >
        <Box
          sx={{
            p: 3,
            backgroundColor: '#f5f5f5',
            borderBottom: '1px solid #e0e0e0'
          }}
        >
          <Typography
            variant="h6"
            sx={{
              display: '-webkit-box',
              minHeight: '3.5em',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            {story.title}
          </Typography>
        </Box>
        <CardContent>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <span role="img" aria-label="person">👤</span>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Author: ${story.by}`} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <span role="img" aria-label="star">⭐</span>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Karma: ${story.author.karma}`} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <span role="img" aria-label="trophy">🏆</span>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={`Score: ${story.score}`} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <span role="img" aria-label="clock">⏰</span>
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={new Date(story.time * 1000).toLocaleString()} />
          </ListItem>
        </CardContent>
      </Card>
    </a>
  );
};

export default StoryCard;
