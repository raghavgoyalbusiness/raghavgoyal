import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
}

const TestEmail = ({ name }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>Email infrastructure test from raghavgoyal.co.uk</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>It works! 🎉</Heading>
        <Text style={text}>
          {name ? `Hi ${name},` : 'Hi there,'}
        </Text>
        <Text style={text}>
          This is a test email confirming that the sender domain{' '}
          <strong>notify.nksalescentre.in</strong> is correctly configured and
          your app can deliver transactional emails end to end.
        </Text>
        <Text style={muted}>— Raghav's portfolio site</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: TestEmail,
  subject: 'Test email from your portfolio site',
  displayName: 'Test Email',
  previewData: { name: 'Raghav' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '32px 24px', maxWidth: '560px' }
const h1 = { fontSize: '24px', color: '#0d0d0d', marginBottom: '16px' }
const text = { fontSize: '15px', lineHeight: '24px', color: '#262626' }
const muted = { fontSize: '13px', color: '#737373', marginTop: '24px' }
