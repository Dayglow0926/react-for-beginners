import styled, { keyframes } from "styled-components";

const Box = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
`;

const Text = styled.span`
  color: tomato;
`;

function App() {
  return (
    <Box>
      <Text> Test </Text>
    </Box>
  );
}

export default App;
