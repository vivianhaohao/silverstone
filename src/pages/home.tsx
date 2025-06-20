import Head from '../pageComponents/homePageComponents/head.tsx'
import Whyagent from '../pageComponents/homePageComponents/whyAgent.tsx'
import Benefit from '../pageComponents/homePageComponents/benefits.tsx'
import Tradingvideo from '../pageComponents/homePageComponents/tradingVideo.tsx'
import Agents from '../pageComponents/homePageComponents/agents.tsx'
import Agentvideo from '../pageComponents/homePageComponents/agentVideo.tsx'

export default function Home() {
    return (
        <>
            <Head/>
            <Whyagent/>
            <Tradingvideo/>
            <Benefit />
            <Agentvideo/>
            <Agents/>
        </>

    )
}