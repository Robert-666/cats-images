import { Container } from "@mui/system"
import { Grid, Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getHatCatsInfo } from "../actions/hatCatsAction"
import { Link, useParams } from "react-router-dom"
import { Button } from "@mui/material"
import { useState } from "react"


export const Main = () => {

    const { category } = useParams()
    const cats = useSelector(state => state[category] ? state[category].cats.data : undefined)
    const dispatch = useDispatch()
    const [blocks, setBlocks] = useState(6)
    


    useEffect(() => {
        dispatch(getHatCatsInfo())
    }, [])






    return (
        <Container >
            {cats ?
            <Container>
            <Grid container marginTop={15} spacing={1}>
                    {cats && cats.slice(0, blocks).map((cat) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={cat.id}>
                                <img src={cat.url} />
                            </Grid>)
                    })}
                </Grid>
                {blocks < 10 && <Button onClick={() => setBlocks(prevState => prevState + 3)} sx={{ width: "100%", backgroundColor: "#1976d2", color: "#fff", marginBottom: "10px", "&:hover": { backgroundColor: "#1976d2" } }}>Load More</Button>}
                {blocks > 6 && <Button onClick={() => setBlocks(prevState => prevState - 3)} sx={{ width: "100%", backgroundColor: "#1976d2", color: "#fff", marginBottom: "10px", "&:hover": { backgroundColor: "#1976d2" } }}>Show Less</Button>}
                <Link to="/"><Button variant="contained">Go Home</Button></Link>
            </Container> :         <Container>
            <Typography variant="h1" marginTop={10}>
                    Sorry there is no information ...
            </Typography> 
        </Container>} 
        </Container>)



}