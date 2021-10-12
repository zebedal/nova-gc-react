import SnapshotHeader from "./SnapshotHeader"
import SnapshotCharts from './SnapshotCharts'
import {Fragment} from 'react'

const Snapshot = props => (
    <Fragment>
        <SnapshotHeader />
        <SnapshotCharts />
    </Fragment>
)

export default Snapshot