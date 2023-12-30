import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

import { Toolbox, SettingsPanel } from '../editor';
import { Topbar } from '../editor';

import { Container, Button, Card, Text } from '../atomic';

import {Editor, Frame, Element} from "@craftjs/core";

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">A super simple page editor</Typography>
        <Editor resolver={{Card, Button, Text, Container}}> 
          <Grid container spacing={3}>
            <Grid item xs>
              <Frame>
                <Container padding={5} background="#eee">
                  <Card background='#fff' />
                  <Button size="small" variant="outlined">Click</Button>
                  <Text size="small" text="Hi world!" />
                  <Container padding={6} background="#999">
                    <Text size="small" text="It's me again!" />
                  </Container>
                </Container>
              </Frame>
            </Grid>
            <Grid item xs={3}>
              <Paper>
                  <Toolbox />
                  <SettingsPanel />
              </Paper>          
            </Grid>
          </Grid>
        </Editor>
    </div>
  );
}


