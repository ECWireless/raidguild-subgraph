import {
  SummonComplete as SummonCompleteEvent,
  SubmitProposal as SubmitProposalEvent,
  SponsorProposal as SponsorProposalEvent,
  SubmitVote as SubmitVoteEvent,
  ProcessProposal as ProcessProposalEvent,
  ProcessWhitelistProposal as ProcessWhitelistProposalEvent,
  ProcessGuildKickProposal as ProcessGuildKickProposalEvent,
  Ragequit as RagequitEvent,
  TokensCollected as TokensCollectedEvent,
  CancelProposal as CancelProposalEvent,
  UpdateDelegateKey as UpdateDelegateKeyEvent,
  Withdraw as WithdrawEvent
} from "../generated/Moloch/Moloch"
import {
  SummonComplete,
  SubmitProposal,
  SponsorProposal,
  SubmitVote,
  ProcessProposal,
  ProcessWhitelistProposal,
  ProcessGuildKickProposal,
  Ragequit,
  TokensCollected,
  CancelProposal,
  UpdateDelegateKey,
  Withdraw
} from "../generated/schema"

export function handleSummonComplete(event: SummonCompleteEvent): void {
  let entity = new SummonComplete(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.summoner = event.params.summoner
  entity.tokens = event.params.tokens
  entity.summoningTime = event.params.summoningTime
  entity.periodDuration = event.params.periodDuration
  entity.votingPeriodLength = event.params.votingPeriodLength
  entity.gracePeriodLength = event.params.gracePeriodLength
  entity.proposalDeposit = event.params.proposalDeposit
  entity.dilutionBound = event.params.dilutionBound
  entity.processingReward = event.params.processingReward

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubmitProposal(event: SubmitProposalEvent): void {
  let entity = new SubmitProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.applicant = event.params.applicant
  entity.sharesRequested = event.params.sharesRequested
  entity.lootRequested = event.params.lootRequested
  entity.tributeOffered = event.params.tributeOffered
  entity.tributeToken = event.params.tributeToken
  entity.paymentRequested = event.params.paymentRequested
  entity.paymentToken = event.params.paymentToken
  entity.details = event.params.details
  entity.flags = event.params.flags
  entity.proposalId = event.params.proposalId
  entity.delegateKey = event.params.delegateKey
  entity.memberAddress = event.params.memberAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSponsorProposal(event: SponsorProposalEvent): void {
  let entity = new SponsorProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.delegateKey = event.params.delegateKey
  entity.memberAddress = event.params.memberAddress
  entity.proposalId = event.params.proposalId
  entity.proposalIndex = event.params.proposalIndex
  entity.startingPeriod = event.params.startingPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSubmitVote(event: SubmitVoteEvent): void {
  let entity = new SubmitVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.proposalIndex = event.params.proposalIndex
  entity.delegateKey = event.params.delegateKey
  entity.memberAddress = event.params.memberAddress
  entity.uintVote = event.params.uintVote

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessProposal(event: ProcessProposalEvent): void {
  let entity = new ProcessProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalIndex = event.params.proposalIndex
  entity.proposalId = event.params.proposalId
  entity.didPass = event.params.didPass

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessWhitelistProposal(
  event: ProcessWhitelistProposalEvent
): void {
  let entity = new ProcessWhitelistProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalIndex = event.params.proposalIndex
  entity.proposalId = event.params.proposalId
  entity.didPass = event.params.didPass

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProcessGuildKickProposal(
  event: ProcessGuildKickProposalEvent
): void {
  let entity = new ProcessGuildKickProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalIndex = event.params.proposalIndex
  entity.proposalId = event.params.proposalId
  entity.didPass = event.params.didPass

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRagequit(event: RagequitEvent): void {
  let entity = new Ragequit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.memberAddress = event.params.memberAddress
  entity.sharesToBurn = event.params.sharesToBurn
  entity.lootToBurn = event.params.lootToBurn

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensCollected(event: TokensCollectedEvent): void {
  let entity = new TokensCollected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.amountToCollect = event.params.amountToCollect

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelProposal(event: CancelProposalEvent): void {
  let entity = new CancelProposal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.applicantAddress = event.params.applicantAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateDelegateKey(event: UpdateDelegateKeyEvent): void {
  let entity = new UpdateDelegateKey(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.memberAddress = event.params.memberAddress
  entity.newDelegateKey = event.params.newDelegateKey

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.memberAddress = event.params.memberAddress
  entity.token = event.params.token
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
