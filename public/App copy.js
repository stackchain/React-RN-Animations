import React from 'react';
import { useSpring, animated } from 'react-spring';
import Box from '../Box';
import Text from '../Text';

const AnimatedText = animated(Text);

function App() {

  const styles = useSpring({ to: { fontSize: 50, margin: 100 }, from: { fontSize: 10, margin: 0 } })
  return (
    <Box style={{ marginTop: 50 }}>
      <AnimatedText style={{...styles}}>React Spring Animation</AnimatedText>
    </Box>
  );
}

export default App;
