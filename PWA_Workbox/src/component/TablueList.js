import React, { useEffect, useRef } from 'react'

const { tablue } = window

function TablueList() {

    const url = "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard"

    const ref = useRef(null)

    function initViz() {
        new window.tableau.Viz(ref.current, url)
    }

    useEffect(() => {
        initViz()
    }, [])

    return (
        <div>
            <div ref={ref} />
        </div>
    )
}

export default TablueList