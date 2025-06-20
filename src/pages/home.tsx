import Head from '../pageComponents/homePageComponents/head.tsx'
import Whyagent from '../pageComponents/homePageComponents/whyAgent.tsx'
import Benefit from '../pageComponents/homePageComponents/benefits.tsx'
import Tradingimg from '../pageComponents/homePageComponents/tradingImg.tsx'
import Agents from '../pageComponents/homePageComponents/agents.tsx'
import Agentimg from '../pageComponents/homePageComponents/agentImg.tsx'

export default function Home() {
    return (
        <>
            <Head/>
            <Whyagent/>
            <Tradingimg/>
            <Benefit />
            <Agentimg/>
            <Agents/>
        </>

    )
}