import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNav from './MainNav';

const Layout = (props) => {
  return (
    <>
      <MainNav />
      <Container>
        {props.children}
      </Container>
      <br />
    </>
  );
};

export default Layout;