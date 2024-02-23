import React from 'react'
import './TopTen.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Stack } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faHouse } from '@fortawesome/free-solid-svg-icons'

const TopTen = ({ routes }) => {
    return (
        <div
            data-testid="routes"
            className="routes-carousel-container"
            key={Math.random()}
        >
            <Carousel autoPlay={false}>
                {routes?.map((route, i) => (
                    <>
                        <div className="route-header">
                            <h2>
                                <FontAwesomeIcon icon={faBus} />
                                Nummer: {i + 1} Busslinje: {route.busLine}
                            </h2>
                        </div>
                        <div className="route-content">
                            <Paper>
                                <div>
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        flexWrap="wrap"
                                        useFlexGap={true}
                                    >
                                        {route.busStops.map((busStop, i) => {
                                            return (
                                                <Paper>
                                                    <FontAwesomeIcon
                                                        icon={faHouse}
                                                    />
                                                    {i + 1} {'->'}{' '}
                                                    {busStop.name}
                                                </Paper>
                                            )
                                        })}
                                    </Stack>
                                </div>
                            </Paper>
                        </div>
                    </>
                ))}
            </Carousel>
        </div>
    )
}

export default TopTen
