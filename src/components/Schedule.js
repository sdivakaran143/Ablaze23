import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import styles from '../App.module.css';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import TheatersIcon from '@mui/icons-material/Theaters';
import CampaignIcon from '@mui/icons-material/Campaign';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ClassIcon from '@mui/icons-material/Class';
export default function Schedule() {
  return (
    <div className={styles.schedule}>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          9:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <MicExternalOnIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Ablaze Inauguration Function
          </Typography>
          <Typography><b>Venue : </b>Denuka Hall,C Block</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:40 am to 12:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CoPresentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Paper Bestoval
          </Typography>
          <Typography><b>Venue : </b>F301 , F Block - 3rd Floor</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:40 am to 12:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <CoPresentIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
          Ink and Imagination
          </Typography>
          <Typography><b>Venue : </b>F201 , F Block - 2nd Floor</Typography>
        </TimelineContent>
      </TimelineItem>
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:40 am to 12:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <EmojiObjectsIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            IdeaThon
          </Typography>
          <Typography><b>Venue : </b>Smart ClassRoom , F Block - 3rd Floor</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:30 am to 12:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Code Olympia
          </Typography>
          <Typography><b>Venue : </b> R2s Lab, F Block - 1st Floor</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          11:00 am to 12:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <ClassIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Workshop
          </Typography>
          <Typography><b>Venue : </b>Denuka Hall,C Block</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          12:30 pm to 1:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
          <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Lunch Break 
          </Typography>
          {/* <Typography><b>Venue : </b>Canteen, Near F Block</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          1:30 pm to 2:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CodeIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Koda Chrome
          </Typography>
          <Typography><b>Venue : </b> MCA Net Lab, C Block - 3rd Floor</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          1:30 pm to 2:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <TipsAndUpdatesIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
          Think Genius
          </Typography>
          <Typography><b>Venue : </b> R2s Lab, F Block - 1st Floor</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          1:30 pm to 2:30 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <TheatersIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Flim Fights
          </Typography>
          <Typography><b>Venue : </b>Dhenuka Hall, C Block</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2:30 pm to 3:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="success">
            <CampaignIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Marketing Master
          </Typography>
          <Typography><b>Venue : </b>Dhenuka Hall, C Block</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          3:00 pm to 4:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="secondary">
            <EmojiEventsIcon/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '30px', px: 2 }}>
          <Typography variant="b" component="b">
            Ending Cermony & Price distribution 
          </Typography>
          <Typography><b>Venue : </b>Dhenuka Hall, C Block</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

      
