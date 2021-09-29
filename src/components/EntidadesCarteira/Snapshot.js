import SnapshotHeader from "./SnapshotHeader"
import SnapshotCharts from './SnapshotCharts'
import React from 'react'

const Snapshot = props => (
    <React.Fragment>
        <SnapshotHeader />
        <SnapshotCharts />
    </React.Fragment>
)

export default Snapshot