import { NavLink } from 'react-router-dom'
import { Container, Group, Button } from '@mantine/core'

const Navigation = () => {
  return (
    <Container>
      <Group>
        <Button component={NavLink} to="/" variant="subtle">Home</Button>
        <Button component={NavLink} to="/experience" variant="subtle">Experience</Button>
        <Button component={NavLink} to="/projects" variant="subtle">Projects</Button>
      </Group>
    </Container>
  )
}
export default Navigation
