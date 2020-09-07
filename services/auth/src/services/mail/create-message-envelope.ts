export const createMessageEnvelope = (from: string, to: string, envelopeData: any) => {
  return {
    from: `Test from ${from}`,
    to,
    ...envelopeData
  }
};