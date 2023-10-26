// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';

// export default function TripCard() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems:'center',
//         flexDirection: 'column',
//         justifyContent:'space-between',
//         textAlign:'center',
//         '& > :not(style)': {
//           m: 1,
//           width: 600,
//           height: 300,

//         },
//       }}
//     >
//    <Paper elevation={3}>
//         <span><h3>Your Upcoming Trip !!!</h3>
//           <p>
//                 Trip Title: Scenic Drive<br></br>
//                 Departure Time: 8:00 AM<br></br>
//                 Departure Point: Parkview Park<br></br>
//                 Destination: Mountain Overlook<br></br>
//                 Available Seats: 4<br></br>
//                 Estimated Cost: $15 per person<br></br>
//                 Contact Driver: Michael (555) 987-6543<br></br>
//           </p>
//         </span>
//       </Paper>
//     <Paper elevation={3}>
//         <span><h3>Trip Card Info </h3>
//          <p> Trip Title: Morning Commute<br></br>
//             Departure Time: 7:30 AM<br></br>
//             Departure Point: Main Street<br></br>
//             Destination: Downtown<br></br>
//             Estimated Cost: $8<br></br>
//             Contact Driver: John (555) 555-1234
//           </p>
//           <Button variant="contained" sx={{ margin: '3px', padding: 2, minWidth: { xs: '230px', md: '120px' }, height: '55px'}} > GiddyUP!</Button>
//         </span>
//       </Paper>

//       <Paper elevation={3}>
//         <span><h3>Trip Card Info </h3>
//         <p>
//           Trip Title: Weekend Getaway<br></br>
//           Departure Time: 10:00 AM<br></br>
//           Departure Point: Oakwood Park<br></br>
//           Destination: Lakeside Cabin<br></br>
//           Estimated Cost: $20 per person<br></br>
//           Contact Driver: Emma (555) 123-4567<br></br>
//         </p>
//         <Button variant="contained" sx={{ margin: '3px', padding: 2, minWidth: { xs: '230px', md: '120px' }, height: '55px'}} > GiddyUP!</Button>
//         </span>
//       </Paper>
//     </Box>
//   );
// }


// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';

// const TripCard = () => {
//   return (
//     <Grid container justifyContent="center">
//       <div>
//         <h2>Trip Title: Scenic Drive</h2>
//         <p>Departure Time: 8:00 AM</p>
//         <p>Departure Point: Parkview Park</p>
//         <p>Destination: Mountain Overlook</p>
//         <p>Available Seats: 4</p>
//         <p>Estimated Cost: $15 per person</p>
//         <p>Contact Driver: Michael (555) 987-6543</p>
//       </div>
//       <Grid container justifyContent="center">
//         <Button variant="contained" color="primary">
//           Book Now
//         </Button>
//         <Button variant="outlined" color="primary">
//           Details
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default TripCard;


// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const TripCard = () => {
//   const cardStyle = {
//     border: '1px solid #ccc',
//     padding: '16px',
//     maxWidth: '600px',
//     margin: '0 auto',
//     textAlign: 'center',
//   };

//   const textStyles = {
//     margin: '1px 0', // Adjust the top and bottom margin to control spacing between lines
//   };
//   const buttonStyles = {
//     padding: '8px 16px', // Adjust the padding as needed
//   };

//   return (
//     <Box style={cardStyle}>
//       <div>
//         <h3 style={textStyles}>Trip Title: Scenic Drive</h3>
//         <p style={textStyles}>Departure Time: 8:00 AM</p>
//         <p style={textStyles}>Departure Point: Parkview Park</p>
//         <p style={textStyles}>Destination: Mountain Overlook</p>
//         <p style={textStyles}>Available Seats: 4</p>
//         <p style={textStyles}>Estimated Cost: $15 per person</p>
//         <p style={textStyles}>Contact Driver: Michael (555) 987-6543</p>
//       </div>
//       <Grid container justifyContent="center">
//         <Button variant="contained" color="primary" style={buttonStyles}>
//           Book Now
//         </Button>
//         <Button variant="outlined" color="primary" style={buttonStyles}>
//           Details
//         </Button>
//       </Grid>
//     </Box>
//   );
// };

// export default TripCard;


// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const TripCard = () => {
//   const cardStyle = {
//     border: '1px solid #ccc',
//     padding: '16px',
//     maxWidth: '600px',
//     margin: '0 auto',
//     textAlign: 'Left',
//   };

//   const textStyles = {
//     margin: '1px 0',
//   };

//   const buttonContainerStyles = {
//     marginTop: '8px', // Add margin to separate the text and buttons
//   };

//   const buttonStyles = {
//     padding: '8px 16px',
//     alignSelf: 'right'
//   };

//   return (
//     <Box style={cardStyle}>
//       <div>
//         <h3 style={textStyles}>Trip Title: Scenic Drive</h3>
//         <p style={textStyles}>Departure Time: 8:00 AM</p>
//         <p style={textStyles}>Departure Point: Parkview Park</p>
//         <p style={textStyles}>Destination: Mountain Overlook</p>
//         <p style={textStyles}>Estimated Cost: $15 per person</p>
//         <p style={textStyles}>Contact Driver: Michael (555) 987-6543</p>
//       </div>
//       <Grid container justifyContent="center" style={buttonContainerStyles}>
//         <Button variant="contained" color="primary" style={buttonStyles}>
//           Book Now
//         </Button>
//         <Button variant="outlined" color="primary" style={buttonStyles}>
//           Details
//         </Button>
//       </Grid>
//     </Box>
//   );
// };

// export default TripCard;

// import React from 'react';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// const TripCard = () => {
//   const cardStyle = {
//     border: '1px solid #ccc',
//     padding: '16px',
//     maxWidth: '600px',
//     margin: '0 auto',
//   };

//   const textStyles = {
//     margin: '0.5px 0',
//   };

//   return (
//     <Box style={cardStyle}>
//       <div>
//         <h3 style={textStyles}>Trip Title: Scenic Drive</h3>
//         <p style={textStyles}>Departure Time: 8:00 AM</p>
//         <p style={textStyles}>Departure Point: Parkview Park</p>
//         <p style={textStyles}>Destination: Mountain Overlook</p>
//         <p style={textStyles}>Estimated Cost: $15 per person</p>
//         <p style={textStyles}>Contact Driver: Michael (555) 987-6543</p>
//       </div>
//       <Grid container justifyContent="flex-end">
//         <Button variant="contained" color="primary">
//           Book Now
//         </Button>
//         <Button variant="outlined" color="primary">
//           Details
//         </Button>
//       </Grid>
//     </Box>
//   );
// };

// export default TripCard;





import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const TripCard = ({ tripInfo }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    maxWidth: '600px',
    margin: '16px auto',
  };

  const textStyles = {
    margin: '2px 0',
  };

  return (
    <Box style={cardStyle}>
      <div>
        <h3 style={textStyles}>{tripInfo.title}</h3>
        <p style={textStyles}>Departure Time: {tripInfo.departureTime}</p>
        <p style={textStyles}>Departure Point: {tripInfo.departurePoint}</p>
        <p style={textStyles}>Destination: {tripInfo.destination}</p>
        <p style={textStyles}>Available Seats: {tripInfo.availableSeats}</p>
        <p style={textStyles}>Estimated Cost: {tripInfo.estimatedCost}</p>
        <p style={textStyles}>Contact Driver: {tripInfo.contactDriver}</p>
      </div>
      <Grid container justifyContent="flex-end">
        <Button variant="contained" color="primary">
          Book Now
        </Button>
        <Button variant="outlined" color="primary">
          Details
        </Button>
      </Grid>
    </Box>
  );
};

const App = () => {
  const tripInfo1 = {
    title: 'Scenic Drive',
    departureTime: '8:00 AM',
    departurePoint: 'Parkview Park',
    destination: 'Mountain Overlook',
    availableSeats: 4,
    estimatedCost: '$15 per person',
    contactDriver: 'Michael (555) 987-6543',
  };

  const tripInfo2 = {
    title: 'Coastal Adventure',
    departureTime: '9:30 AM',
    departurePoint: 'Beachside Parking Lot',
    destination: 'Coastal Town',
    availableSeats: 2,
    estimatedCost: '$10 per person',
    contactDriver: 'Olivia (555) 321-7890',
  };

  const tripInfo3 = {
    title: 'Mountain Hike',
    departureTime: '7:00 AM',
    departurePoint: 'Trailhead Parking',
    destination: 'Summit',
    availableSeats: 3,
    estimatedCost: '$12 per person',
    contactDriver: 'John (555) 123-4567',
  };

  return (
    <div>
      <TripCard tripInfo={tripInfo1} />
      <TripCard tripInfo={tripInfo2} />
      <TripCard tripInfo={tripInfo3} />
    </div>
  );
};

export default App;
