export type ResultAdvice = { label: string; color: string; tips: string[] };

export const questions = [
  {
    title: 'How often do you reuse the same public wallet address across apps?',
    options: [
      'All the time — one main wallet for everything',
      'Sometimes — separate for a few things',
      'Rarely — I segment by activity',
      'Never — I use privacy layers like Aztec'
    ],
  },
  {
    title: 'When you make a payment onchain, who can see the amount and recipient?',
    options: [
      'Anyone who knows my address',
      'Friends or projects I share with',
      'Only counterparties I consent to',
      'No one — I prefer encrypted transfers'
    ],
  },
  {
    title: 'How do you protect against onchain snooping (tracking balances, history, alpha)?',
    options: [
      'I don’t — it’s public anyway',
      'I rotate wallets and bridges',
      'I use tools that hide metadata',
      'I transact on private L2s like Aztec'
    ],
  },
  {
    title: 'For identity checks, what do you prefer?',
    options: [
      'Traditional KYC with full docs',
      'OAuth/social proofs',
      'zk proofs from emails or credentials',
      'Client-side zk like ZKPassport'
    ],
  },
  {
    title: 'Do you build or use apps that hide business logic or game state?',
    options: [
      'No — everything is public',
      'Sometimes — minimal masking',
      'Yes — selective disclosure matters',
      'Yes — Noir-powered private contracts'
    ],
  },
  {
    title: 'How comfortable are you with running nodes or participating in decentralized networks?',
    options: [
      'Not at all',
      'I’ve tried once',
      'Comfortable on testnets',
      'Actively running validators/provers'
    ],
  },
  {
    title: 'What’s your approach to messaging account links (Discord, X, wallet)?',
    options: [
      'I link everything to my main wallet',
      'I’m cautious but still link often',
      'I compartmentalize identities',
      'I avoid linking public accounts to onchain activity'
    ],
  },
  {
    title: 'How do you feel about gas + fees to get privacy?',
    options: [
      'Not worth it',
      'Only for big moves',
      'Worth it for sensitive txs',
      'Privacy is default; fees are secondary'
    ],
  },
].map(q => ({
  ...q,
  // Higher index means more privacy-aware
  options: q.options,
}));
