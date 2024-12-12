import type { OnTransactionHandler } from '@metamask/snaps-sdk';
import { Box, Copyable, Heading, Text } from '@metamask/snaps-sdk/jsx';
import { generateEmojiChecksum } from 'address-emoji-checksum';

/**
 * Handle incoming transactions, sent through the `wallet_sendTransaction`
 * method.
 * Computes the emoji address checksum.
 * @param args - The request parameters.
 * @param args.transaction - The transaction object. This contains the
 * transaction parameters, such as the `from`, `to`, `value`, and `data` fields.
 * @param chainId - The id of the blockchain.
 * @returns The transaction insights.
 */
export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  if (transaction.to) {
    const toAddress = transaction.to as `0x${string}`;
    const emojiRepresentation = await generateEmojiChecksum(toAddress, 4, 'ETH', false, true);
    return {
      content: (
        <Box>
          <Heading>Address</Heading>
          <Copyable value={toAddress} />
          <Heading>Checksum</Heading>
          <Heading size="lg">{emojiRepresentation}</Heading>
        </Box>
      ),
    };
  }
  return {
    content: (
      <Box>
        <Text>Unknown Destination Address</Text>
      </Box>
    ),
  };
};
