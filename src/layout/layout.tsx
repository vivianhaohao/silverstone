import Guide from '../layoutComponents/guide.tsx'
import Subscribe from '../layoutComponents/subscribe.tsx'
import Links from '../layoutComponents/links.tsx'
import SocialClaim from '../layoutComponents/socialClaim.tsx'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
        <Guide />
        {children}

        <Subscribe />
        <Links />
        <SocialClaim/>




    </>
  )
}
