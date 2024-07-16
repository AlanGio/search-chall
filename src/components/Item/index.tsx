import { Chip, Link, Paper, Typography } from "@mui/material";
import { SearchResult } from "../../App";

const categories = {
  VIDEOS: "Video",
  PLAYLISTS: "Playlist",
  BLOG_POSTS: "Blog Post",
};

const Item = ({ category, url, title, description }: SearchResult) => (
  <Paper
    sx={{
      mb: 2,
      p: 2,
      border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 1,
    }}
  >
    <Chip label={categories[category]} />

    <Link href={url} target="_blank" variant="h5" rel="noreferrer">
      {title}
    </Link>
    <Typography variant="subtitle1">{description}</Typography>
  </Paper>
);

export default Item;
