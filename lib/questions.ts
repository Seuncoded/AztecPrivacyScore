// lib/questions.ts
export type ResultAdvice = { label: string; color: string; tips: string[] };

export const allQuestions = [
  { title: 'How often do you reuse one public wallet across everything?', options: ['Always', 'Often', 'Rarely', 'Never—use private L2s like Aztec'] },
  { title: 'Who can see your onchain payments?', options: ['Anyone onchain', 'Friends I tell', 'Only counterparties', 'No one—encrypted transfers'] },
  { title: 'How do you avoid onchain snooping?', options: ["I don't", 'Rotate wallets', 'Use metadata-hiding tools', 'Use private rollups (Aztec)'] },
  { title: 'How do you verify identity online?', options: ['Full KYC uploads', 'Social logins', 'zk email proofs', 'Client-side ZKPassport'] },
  { title: 'Do you separate wallets for DeFi, NFTs, and DAOs?', options: ['One wallet', 'Two wallets', 'Segmented by activity', 'Private accounts on Aztec'] },
  { title: 'How do you handle airdrops with public histories?', options: ['Main wallet always', 'Sometimes burner', 'Frequent compartmentalization', 'Private claim flow if possible'] },
  { title: 'When sharing addresses in Discord/Twitter, you…', options: ['Post main address', 'Post alt sometimes', 'DM limited info', 'Avoid posting—use private L2 links'] },
  { title: 'How do you manage ENS names?', options: ['Bind to main wallet', 'Bind to alt wallet', 'Rotate per use', 'Keep ENS separate from spend wallet'] },
  { title: 'Front‑running risk in DeFi?', options: ['Ignore it', 'Rely on slippage', 'Use private relays', 'Use private execution (Aztec)'] },
  { title: 'How do you pay friends?', options: ['Public L1', 'Public L2', 'Mix of public/private', 'Private Aztec transfer'] },

  { title: 'DAO voting style?', options: ['Public address votes', 'New wallet for voting', 'Off-chain sign + post', 'Private voting with ZK'] },
  { title: 'NFT minting approach?', options: ['Main wallet mint', 'Dedicated mint wallet', 'Rotate wallets per drop', 'Mint via private account'] },
  { title: 'Portfolio screenshots?', options: ['Post publicly', 'Blur amounts', 'Crop wallets', 'Never post—privacy first'] },
  { title: 'Onchain game strategy privacy?', options: ['All public', 'Delay actions', 'Partial obfuscation', 'Private state with ZK'] },
  { title: 'Bridge usage and privacy?', options: ['Main wallet bridges', 'Occasional burner', 'Split routes', 'Prefer private rollup ↔ L1 flows'] },
  { title: 'Telegram/Discord links to wallets?', options: ['Linked everywhere', 'Linked sometimes', 'Separate identities', 'Never link public → wallet'] },
  { title: 'Custodial exchange withdrawals?', options: ['Always to main wallet', 'Sometimes to alt', 'Mix to segment history', 'Withdraw to private account'] },
  { title: 'Browser hygiene for dapps?', options: ['All in one profile', 'Two profiles', 'Multiple isolated profiles', 'Hardened profile + private L2'] },
  { title: 'Approve/spend permissions?', options: ['Unlimited on main', 'Unlimited on alt', 'Custom limits', 'Private approvals on Aztec'] },
  { title: 'Stablecoin payments privacy?', options: ['Public chain USDC', 'Occasional burner', 'Shield part of flow', 'Private stablecoin transfers'] },

  { title: 'Public analytics sites (Etherscan/Zapper) on you?', options: ['Open everything', 'Sometimes', 'Rarely', 'Avoid—use private tooling'] },
  { title: 'Device security for wallets?', options: ['Hot wallet only', 'Hot + passcode', 'Hardware wallet', 'Hardware + private L2 accounts'] },
  { title: 'Seed backup method?', options: ['Screenshot/cloud', 'Note app', 'Paper only', 'Paper + splitter + no public linkage'] },
  { title: 'DeFi strategy signaling?', options: ['Tweet trades', 'Share sometimes', 'Share after delay', 'Never share—use private execution'] },
  { title: 'Gas saving vs privacy tradeoff?', options: ['Cheapest always', 'Usually cheap', 'Depends on context', 'Privacy > small gas savings'] },
  { title: 'Wallet labelling in portfolio apps?', options: ['Use real names', 'Nicknames', 'Codes only', 'Avoid linking wallets to apps'] },
  { title: 'Dapp approvals on first visit?', options: ['Approve everything', 'Approve then revoke later', 'Custom approve per need', 'Approve inside private L2'] },
  { title: 'Public donations/tips?', options: ['Main wallet', 'Alt wallet', 'Rotating wallets', 'Private contribution route'] },
  { title: 'DeFi leverage positions visibility?', options: ['Publicly visible', 'Move after opening', 'Obfuscate routing', 'Open/manage privately'] },
  { title: 'Onchain subscriptions/payroll?', options: ['Public payment stream', 'Alt wallet stream', 'Rotate destinations', 'Private recurring payments'] },

  { title: 'Mobile wallet usage on shared Wi‑Fi?', options: ['Yes often', 'Sometimes', 'Rare with VPN', 'Avoid—private env + VPN'] },
  { title: 'Doxxing risk awareness?', options: ['Never considered', 'A little', 'Quite aware', 'Actively mitigate with private L2'] },
  { title: 'L2 selection criteria?', options: ['Fees only', 'Fees + UX', 'Add decentralization', 'Add privacy by default (Aztec)'] },
  { title: 'Sharing transaction hashes publicly?', options: ['Always', 'Sometimes', 'Rarely', 'Never—use proofs selectively'] },
  { title: 'Price bots and wallet trackers on you?', options: ['Enabled', 'Some', 'Minimal', 'Disabled—reduce data trails'] },
  { title: 'Use of mixers in the past?', options: ['Never thought', 'Tried once', 'Use cautiously', 'Prefer programmable privacy L2s'] },
  { title: 'Custody split between wallets?', options: ['One hot', 'Hot + alt', 'Hot + cold', 'Segment + private accounts'] },
  { title: 'NFT sales history exposure?', options: ['Public and proud', 'Public but careful', 'Try to hide patterns', 'Sell from private flows'] },
  { title: 'Alpha groups asking for addresses?', options: ['Share freely', 'Share sometimes', 'Share rarely', 'Never share—use proofs instead'] },
  { title: 'When collaborating with teams?', options: ['Main wallet on docs', 'Alt wallet on docs', 'Pseudonymous split', 'Private identity proofs only'] },

  { title: 'RPC selection?', options: ['Whatever default', 'Fastest only', 'Self/paid RPC', 'Privacy‑respecting RPC + L2'] },
  { title: 'Reveal real‑time trading?', options: ['Yes for clout', 'Sometimes', 'After delay', 'Never live—private execution'] },
  { title: 'Onchain identity linking (Twitter/ENS)?', options: ['Link all', 'Link some', 'Separate handles', 'Keep unlinkable'] },
  { title: 'Safe multisig usage?', options: ['One safe for all', 'Separate safes', 'Per team/project', 'Private treasury ops when possible'] },
  { title: 'Public P2P marketplace usage?', options: ['Main wallet', 'Alt wallet', 'Rotating wallets', 'Private settlement layer'] },
  { title: 'Use of stealth addresses?', options: ['Never', 'Rarely', 'Sometimes', 'Often / private accounts'] },
  { title: 'Revealing balances to friends?', options: ['Open book', 'Sometimes', 'Only ranges', 'Never—need‑to‑know'] },
  { title: 'Tax/record exports with wallet links?', options: ['Export everything', 'Partial exports', 'Manual aggregation', 'Export without revealing addresses'] },
  { title: 'Public referral links tied to wallet?', options: ['Share everywhere', 'Share sometimes', 'Share privately', 'Avoid—use non‑linked refs'] },
  { title: 'Web3 forms (Typeform/Sheets) asking wallet?', options: ['Provide main', 'Provide alt', 'Provide burner', 'Avoid—prefer ZK proofs'] },

  { title: 'Onchain gaming guild payouts?', options: ['Main wallet', 'Guild payout wallet', 'Rotating wallets', 'Private payout channel'] },
  { title: 'Trading competitions visibility?', options: ['Under main', 'Under alt', 'Anon handle', 'Private execution + later proof'] },
  { title: 'Social graphs from your wallet?', options: ['Acceptable', 'Annoying', 'Problematic', 'Avoid via private L2'] },
  { title: 'Stablecoin holds location?', options: ['One public wallet', 'Two wallets', 'Segment by purpose', 'Private accounts for holdings'] },
  { title: 'MEV awareness?', options: ['Not aware', 'Somewhat', 'Aware and careful', 'Avoid via private execution'] },
  { title: 'Dapp connect permissions?', options: ['Connect all', 'Connect often', 'Connect selectively', 'Sandboxed connect only'] },
  { title: 'KYC storage concerns?', options: ['Not worried', 'A bit', 'Concerned', 'Use ZK to avoid storage'] },
  { title: 'GitHub linking to wallet for bounties?', options: ['Main wallet', 'Alt wallet', 'Separate bounty wallet', 'Private payout proof only'] },
  { title: 'Discord roles requiring wallet linking?', options: ['Link main', 'Link alt', 'Use burner', 'Use ZK proofs for roles'] },
  { title: 'airdrops claiming from main wallet?', options: ['Always', 'Usually', 'Sometimes', 'Never—claim privately'] },

  { title: 'Public watchlists tracking you?', options: ['Fine by me', 'Meh', 'Try to avoid', 'Strongly avoid—use privacy'] },
  { title: 'Sharing contract interactions in public chats?', options: ['Yes', 'Sometimes', 'Rarely', 'Never while active'] },
  { title: 'DeBank/Zerion connections?', options: ['Link main', 'Link alt', 'Minimal linking', 'No linking to public trackers'] },
  { title: 'Mobile dapp browsers?', options: ['Use one for all', 'Two browsers', 'Isolated browser', 'Hardened + private L2'] },
  { title: 'Cold start on new chains?', options: ['Bridge from main', 'Bridge from alt', 'Use new wallet', 'Use private bridge routes'] },
  { title: 'Publishing research with your wallet?', options: ['Yes', 'Sometimes', 'After delay', 'Never—separate identity'] },
  { title: 'Team multisig signer privacy?', options: ['Known addresses', 'Partly known', 'Mostly obfuscated', 'Private signer proofs'] },
  { title: 'Open bounties paid onchain?', options: ['To main wallet', 'To alt wallet', 'To bounty wallet', 'Private payout route'] },
  { title: 'Telegram bots reading wallet balances?', options: ['Enabled', 'Sometimes', 'Rarely', 'Disabled'] },
  { title: 'Public POAPs exposing history?', options: ['Collect on main', 'Collect on alt', 'Collect on burner', 'Avoid/collect privately'] },

  { title: 'Lending/borrowing privacy?', options: ['Public positions', 'Some obfuscation', 'Split wallets', 'Private credit proofs'] },
  { title: 'Use of allowlists tied to wallets?', options: ['Main only', 'Alt sometimes', 'Multiple wallets', 'Use ZK allowlist proofs'] },
  { title: 'Reveal NFT floor-price moves you made?', options: ['Yes', 'Sometimes', 'After a while', 'Never—separate identity'] },
  { title: 'Custodial staking withdrawals?', options: ['Main wallet', 'Alt', 'Mix', 'Withdraw to private account'] },
  { title: 'Sharing swap receipts/screenshots?', options: ['Often', 'Sometimes', 'Rarely', 'Never—share proofs only'] },
  { title: 'Dapp telemetry/analytics consent?', options: ['Accept all', 'Usually accept', 'Review and limit', 'Reject/route via private L2'] },
  { title: 'Auto‑labeling in explorers?', options: ['I like it', 'Neutral', 'Dislike', 'Actively avoid labels'] },
  { title: 'Public staking validators tied to identity?', options: ['Fine', 'Depends', 'Prefer pseudonymous', 'Prefer private validation proofs'] },
  { title: 'Monitoring wallets of friends/influencers?', options: ['Yes', 'Sometimes', 'Rarely', 'Avoid—respect privacy norms'] },
  { title: 'Using the same seed across chains?', options: ['Yes', 'Sometimes', 'Rarely', 'Never—strong isolation'] },

  { title: 'Keep long‑term savings where?', options: ['Main hot wallet', 'Alt hot wallet', 'Hardware/hybrid', 'Private accounts + cold'] },
  { title: 'Public bounty payouts transparency?', options: ['Wallet-visible', 'Mixer later', 'Segmented payout', 'Private payout with proof'] },
  { title: 'DEX usage timing signals?', options: ['Real-time', 'Soon after', 'After delay', 'Never reveal timing'] },
  { title: 'Gas tracker/MEV relay usage?', options: ['None', 'Sometimes', 'Relays enabled', 'Private relays/L2'] },
  { title: 'Onchain reputation building?', options: ['Under main', 'Under alt', 'Under pseudonym', 'With ZK proofs only'] },
  { title: 'Chain analytics contracts approvals?', options: ['Approve', 'Approve then revoke', 'Custom approval', 'Avoid / private approvals'] },
  { title: 'Recovery methods for wallets?', options: ['Email/SMS', 'Seed only', 'Seed + shard', 'Hardware + social ZK recovery'] },
  { title: 'OpenSea list/sale patterns?', options: ['Main wallet', 'Alt', 'Multiple wallets', 'Private listing flow'] },
  { title: 'Onchain tipping culture?', options: ['Main wallet', 'Alt wallet', 'Burner', 'Private tip route'] },
  { title: 'Public Gitcoin grants donations?', options: ['Main wallet', 'Alt wallet', 'Burner', 'Private proof of donation'] },

  { title: 'How do you handle onchain subscriptions?', options: ['Main wallet', 'Alt', 'Multiple wallets', 'Private recurring channel'] },
  { title: 'Paying contractors onchain?', options: ['Main wallet', 'Alt', 'Separate payroll wallet', 'Private payroll channel'] },
  { title: 'Listing assets on marketplaces?', options: ['Main wallet', 'Alt wallet', 'Seller wallet', 'Private listing + reveal proof'] },
  { title: 'Chain‑to‑chain identity reuse?', options: ['Reuse seed/addr', 'Some reuse', 'Different per chain', 'Different + private L2'] },
  { title: 'Managing DAO compensation?', options: ['Public stream', 'Alt stream', 'Split per role', 'Private stream'] },
  { title: 'L2/L1 migrations and histories?', options: ['Keep same wallets', 'Partial change', 'Fresh wallets', 'Private migration route'] },
  { title: 'Publishing onchain research wallets?', options: ['Same wallet', 'Alt wallet', 'Separate research wallet', 'No linking wallet at all'] },
  { title: 'Giveaways requiring address posts?', options: ['Post main', 'Post alt', 'Post burner', 'Avoid—prefer ZK verification'] },
  { title: 'Wallet → IRL identity linkage risk?', options: ['Not concerned', 'A bit', 'Concerned', 'Avoid via private L2 + opsec'] },
  { title: 'Sharing watch-only addresses with apps?', options: ['Many apps', 'Some apps', 'Few apps', 'None'] },

  { title: 'Keep NFTs with social value where?', options: ['Main wallet', 'Alt wallet', 'Display wallet', 'Display wallet split from spend'] },
  { title: 'Onchain betting/gaming records?', options: ['Public', 'Public but split', 'Obfuscated', 'Private records only'] },
  { title: 'Aggregator routing transparency?', options: ['Fine', 'Prefer hidden sometimes', 'Prefer dark routes', 'Private routes only'] },
  { title: 'Lending collateral visibility?', options: ['Public collateral', 'Split wallets', 'Route obfuscation', 'Private collateral proofs'] },
  { title: 'Stablecoin reserves usage signaling?', options: ['Public movements', 'Occasional concealment', 'Obfuscation', 'Private treasury ops'] },
  { title: 'Wallet naming in public repos/docs?', options: ['Real names', 'Nicknames', 'Codes', 'Omit entirely'] },
  { title: 'Linking phone/email to wallets?', options: ['Yes', 'Sometimes', 'Rarely', 'Never'] },
  { title: 'Cross‑posting txs to social?', options: ['Often', 'Sometimes', 'Rarely', 'Never'] },
  { title: 'Protocol allowlisted address leaks?', options: ['Acceptable', 'Annoying', 'Problematic', 'Avoid'] },
  { title: 'General approach to privacy onchain?', options: ['Public by default', 'Privacy sometimes', 'Context‑dependent', 'Privacy by default'] },
] as const;

// Helpers (same as before)
function shuffle<T>(a: T[], rnd: () => number) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function getRandomQuestions(n: number, seed?: number) {
  const rnd = seed ? mulberry32(seed) : Math.random;
  const copy = [...allQuestions];
  shuffle(copy, rnd);
  return copy.slice(0, n);
}