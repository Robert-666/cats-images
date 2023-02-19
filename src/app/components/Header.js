import { AppBar, Toolbar, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom"
import { getCategoryData } from "../actions/categoryAction"

export const Header = () => {

    const categories = useSelector(state => state.categories.category.data)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getCategoryData())
    }, [])


    return (
        <>
            <AppBar sx={{ backgroundColor: "#fff" }}>
                <Container>
                    <Toolbar sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "space-between",
                        backgroundColor: "#fff"
                        
                    }}>
                        {
                            categories &&
                            categories.map(item => <NavLink  key={item.id} to={`/${item.name}`}><Typography variant="subtitle2">{item.name}</Typography></NavLink>)

                        }
                    </Toolbar>
                </Container>
               
            </AppBar>
            <Outlet />
        </>

    )
}