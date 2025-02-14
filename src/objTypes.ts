
// Author: Rui Deleterium
// Project: https://github.com/deleterium/SC-Simulator
// License: BSD 3-Clause License

/**
 * Object for memory entries
 *
 * @member {string} varName Variable name defined in assembly
 * @member {bigint} value Variable value (64-bit unsigned)
 */
export interface MemoryObj {
    varName: string
    value: bigint
}

/**
 * Object for transactions created by user
 *  @member {bigint} sender
 *  @member {bigint} recipient
 *  @member {bigint} amount
 *  @member {number} blockheight
 *  @member {? string} messageText - Max 32 chars
 *  @member {? string} messageHex - If messageText is define, this is ignored. Max 64 chars hexadecimal
 */
export interface UserTransactionObj {
    sender: bigint
    recipient: bigint
    amount: bigint
    blockheight: number
    messageText?: string
    messageHex?: string
}
