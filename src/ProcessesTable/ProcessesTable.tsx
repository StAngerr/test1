import React from "react"
import {getProcesses} from "../api/prcesses.api";
import {Process} from "../types/prosesses";

export const ProcessesTable = () => {
    const [processes, setProcesses] = React.useState<Process[]>([]);

    React.useEffect(() => {
        getProcesses().then((data: Process[]) => setProcesses(data))
    }, [])

    return <section>
        <div className={'table'}>
            {processes.length ? <><div className={'table-head'}>
                    <div className={'table-head-cell'}>Name</div>
                    <div className={'table-head-cell'}>Disk</div>
                    <div className={'table-head-cell'}>Memory</div>
                    <div className={'table-head-cell'}>CPU</div>
                </div>
                <div className={'table-content'}>
                    {processes.map(({name, disk, cpu, memory}: Process) => <div className={'table-row'}>
                        <div className={'table-cell name-cell'}>{name}</div>
                        <div className={'table-cell'}>{disk}</div>
                        <div className={'table-cell'}>{cpu}</div>
                        <div className={'table-cell'}>{memory}</div>
                    </div>)}
                </div></> : <span>Loading...</span>
            }
        </div>
    </section>
}