import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const authorMenu = [<LinkedInIcon />, <GitHubIcon />, <InstagramIcon />, <FacebookIcon />];

const defaultInstagram = 'https://www.instagram.com/holbertonaus/';
const defaultFacebook = 'https://www.facebook.com/HolbertonSchoolAustralia';

const authorContact = [
  {
    name: 'Bryce',
    avatar: 'https://avatars.githubusercontent.com/u/124347057?v=4',
    linkedin: 'https://www.linkedin.com/in/bryceknight16/',
    github: 'https://github.com/BryceKnight16',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  },
  {
    name: 'Eva',
    avatar: 'https://avatars.githubusercontent.com/u/124496441?v=4',
    linkedin: 'https://www.linkedin.com/in/eva-m-a3405073/',
    github: 'https://github.com/EvaMicich',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  },
  {
    name: 'Bryan',
    avatar: 'https://avatars.githubusercontent.com/u/124537848?v=4',
    linkedin: 'https://www.linkedin.com/in/bryan-f-231b78162/',
    github: 'https://github.com/BryanField15',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  },
  {
    name: 'Kathryn',
    avatar: 'https://avatars.githubusercontent.com/u/124414205?v=4',
    linkedin: 'https://www.linkedin.com/in/kathryn-kelly-7b10b3243/',
    github: 'https://github.com/Kathryn8',
    instagram: defaultInstagram,
    facebook: defaultFacebook
  }
]

function NewFooter() {
  const [anchorElAuthor, setAnchorElAuthor] = React.useState(null);

  const handleOpenAuthorMenu = (event) => {
    setAnchorElAuthor(event.currentTarget);
  };

  const handleCloseAuthorMenu = () => {
    setAnchorElAuthor(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <span>Made with <span role="img" aria-label="loveHeart" style={{ color: 'red' }}>♥️</span> in Melbourne Australia 2023 by</span>
          <Box sx={{ flexGrow: 0, p: 1 }}>
            <Tooltip title="Open authorMenu">
              <IconButton onClick={handleOpenAuthorMenu} sx={{ p: 1 }}>
                <Avatar alt={authorContact[0].name} src={authorContact[0].avatar} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '-45px' }}
              id="menu-appbar"
              anchorEl={anchorElAuthor}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElAuthor)}
              onClose={handleCloseAuthorMenu}
            >
              {authorMenu.map((authorMenuItem) => (
                <MenuItem key={authorMenuItem} onClick={handleCloseAuthorMenu}>
                  <Typography textAlign="center"><a href={authorContact[0].linkedin}>{authorMenuItem}</a></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NewFooter;
