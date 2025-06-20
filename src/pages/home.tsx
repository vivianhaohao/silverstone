import Head from '../pageComponents/homePageComponents/head.tsx'
import Whyagent from '../pageComponents/homePageComponents/whyAgent.tsx'
import Benefit from '../pageComponents/homePageComponents/benefits.tsx'
import Agents from '../pageComponents/homePageComponents/agents.tsx'
import Agentvideo from '../pageComponents/homePageComponents/agentVideo.tsx'

export default function Home() {
    return (
        <>
            <Head/>
            <Whyagent/>

            <Benefit />
            <Agentvideo/>
            <Agents/>
        </>

    )
}