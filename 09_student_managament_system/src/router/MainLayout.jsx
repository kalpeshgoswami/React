import { Container, Row, Col } from 'react-bootstrap'
import Navbar from '../ui/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {

    return (
        <>
          <Navbar/>
          <Outlet/>
        </>
    )
}

export default MainLayout