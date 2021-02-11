import React from 'react'
import { githubLogo } from '../../../components/AllProjects'
import { S } from './styles'

interface IProps {
    data: {
        preview: string;
        thumbnail: string;
        description: string;
        label: string;
        title: string;
        images: any;
        repository: string
    }
}

const FtSSL: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link href={data.repository} target="_blank">Link</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>Overview</S.SubTitle>
                <S.Description>
                    A miniature implementation of openssl implementing several hashing algorithms, namely:<br />
                    <S.Bold>md5</S.Bold> / <S.Bold>sha224</S.Bold> / <S.Bold>sha255</S.Bold> / <S.Bold>sha512</S.Bold><br /><br />
                    The ft_ssl can also take flags as arguments, Flags for message digest commands are:<br />
                    - <S.Bold>p</S.Bold>{" "}Echoes STDIN to STDOUT and appends the checksum to the end of the output.<br />
                    - <S.Bold>q</S.Bold>{" "}Quiet mode : only prints out the Hash.<br />
                    - <S.Bold>r</S.Bold>{" "}Reverses the printing order, hash first with the original input/filename appended.<br />
                    - <S.Bold>s</S.Bold>{" "}Signifies a string input<br />
                </S.Description>
            </S.Row>
            <S.Row>
                <S.SubTitle>Usage</S.SubTitle>
                <S.Usage>
                    To run the program, first run make, and then ./ssl with the appropriate command.<br /><br />
                    $&gt; echo "echo" | ./ssl md5<br />
                    53f31a089339194f333d2e3995dbb05e<br /><br />
                    $&gt; ./ssl sha224 -s 'quiet' -q<br />
                    a9fa24b33397f04e631863159b833eaa6a3715dfec1aedc88ceeaa6414a71f04<br /><br />
                    $&gt; echo "echo" | ./ssl sha256 -p<br />
                    echo<br />
                    86b0c5a1e2b73b08fd54c727f4458649ed9fe3ad1b6e8ac9460c070113509a1e<br /><br />
                    $&gt; echo "file" &gt; file<br />
                    $&gt; ./ssl sha256 -r file<br />
                    8b911a8716b94442f9ca3dff20584048536e4c2f47b8b5bb9096cbd43c3432d5 file<br /><br />
                    $&gt; ./ssl sha512 -s "string"<br />
                    SHA512 ("string") = c89d7e926efedd6831de377d2f74c1b91fa9337abffca012d604103f94...<br />
                </S.Usage>
            </S.Row>
            <S.Row>
                <S.SubTitle>How it works</S.SubTitle>
                <S.SubHeading>MD5</S.SubHeading>
                <S.Row>
                    <S.Description>
                        This ft_ssl's MD5 algorithm operates on a 128-bit state, divided into four 32-bit words,denoted A, B, C and D.<br />
                    These are initialized to certain fixed constants. The main algorithm then
                    uses each 512-bit message block<br />in turen to modify the state.<br />
                    The processing of a message block consists of four similar stages, termed rounds; each round is composed of 16 similar
                    operations based on a non-linear function F, modular addition, and left rotation.
                    Figure 1 illustrates one operation within a round.
                </S.Description>
                </S.Row>
            </S.Row>
            <S.Row>
                <S.SubHeading>MD 5 Pseudo code</S.SubHeading>
                <S.Usage>
                    <S.ImageDesc>All variables are unsigned 32 bit and wrap modulo 2^32 when calculating</S.ImageDesc><br />
                    <S.Bold>var</S.Bold> int s[64], K[64]<br />
                    <S.Bold>var</S.Bold> int i<br /><br />

                    <S.ImageDesc>s specifies the per-round shift amounts</S.ImageDesc><br />
                    s[ 0..15] := {"{7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22,  7, 12, 17, 22}"}<br />
                    s[16..31] := {"{5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20,  5,  9, 14, 20}"}<br />
                    s[32..47] := {"{4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23,  4, 11, 16, 23}"}<br />
                    s[48..63] := {"{6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21,  6, 10, 15, 21}"}<br /><br />

                    <S.ImageDesc>Use binary integer part of the sines of integers (Radians) as constants:</S.ImageDesc><br />
                    <S.Bold>for</S.Bold> i <S.Bold>from</S.Bold> 0 <S.Bold>to</S.Bold> 63 <S.Bold>do</S.Bold><br />
                        K[i] := floor(232 × abs (sin(i + 1)))<br />
                    <S.Bold>end for</S.Bold><br />
                    <S.ImageDesc>(Or just use the following precomputed table):</S.ImageDesc><br />
                    K[ 0.. 3] := {"{0xd76aa478, 0xe8c7b756, 0x242070db, 0xc1bdceee}"}<br />
                    K[ 4.. 7] := {"{0xf57c0faf, 0x4787c62a, 0xa8304613, 0xfd469501}"}<br />
                    K[ 8..11] := {"{0x698098d8, 0x8b44f7af, 0xffff5bb1, 0x895cd7be}"}<br />
                    K[12..15] := {"{0x6b901122, 0xfd987193, 0xa679438e, 0x49b40821}"}<br />
                    K[16..19] := {"{0xf61e2562, 0xc040b340, 0x265e5a51, 0xe9b6c7aa}"}<br />
                    K[20..23] := {"{0xd62f105d, 0x02441453, 0xd8a1e681, 0xe7d3fbc8}"}<br />
                    K[24..27] := {"{0x21e1cde6, 0xc33707d6, 0xf4d50d87, 0x455a14ed}"}<br />
                    K[28..31] := {"{0xa9e3e905, 0xfcefa3f8, 0x676f02d9, 0x8d2a4c8a}"}<br />
                    K[32..35] := {"{0xfffa3942, 0x8771f681, 0x6d9d6122, 0xfde5380c}"}<br />
                    K[36..39] := {"{0xa4beea44, 0x4bdecfa9, 0xf6bb4b60, 0xbebfbc70}"}<br />
                    K[40..43] := {"{0x289b7ec6, 0xeaa127fa, 0xd4ef3085, 0x04881d05}"}<br />
                    K[44..47] := {"{0xd9d4d039, 0xe6db99e5, 0x1fa27cf8, 0xc4ac5665}"}<br />
                    K[48..51] := {"{0xf4292244, 0x432aff97, 0xab9423a7, 0xfc93a039}"}<br />
                    K[52..55] := {"{0x655b59c3, 0x8f0ccc92, 0xffeff47d, 0x85845dd1}"}<br />
                    K[56..59] := {"{0x6fa87e4f, 0xfe2ce6e0, 0xa3014314, 0x4e0811a1}"}<br />
                    K[60..63] := {"{0xf7537e82, 0xbd3af235, 0x2ad7d2bb, 0xeb86d391}"}<br /><br />

                    <S.ImageDesc>Initialize variables:</S.ImageDesc><br />
                    <S.Bold>var</S.Bold> int a0 := 0x67452301   <S.ImageDesc>A</S.ImageDesc><br />
                    <S.Bold>var</S.Bold> int b0 := 0xefcdab89   <S.ImageDesc>B</S.ImageDesc><br />
                    <S.Bold>var</S.Bold> int c0 := 0x98badcfe   <S.ImageDesc>C</S.ImageDesc><br />
                    <S.Bold>var</S.Bold> int d0 := 0x10325476   <S.ImageDesc>D</S.ImageDesc><br />

                    <S.ImageDesc> Pre-processing: adding a single 1 bit</S.ImageDesc><br />
                    <S.Bold>append</S.Bold> "1" bit to message<br />
                    <S.ImageDesc>
                        Notice: the input bytes are considered as bits strings,
                        where the first bit is the most significant bit of the byte.
                    </S.ImageDesc><br /><br />
                    <S.ImageDesc>
                        Pre-processing: padding with zeros
                    </S.ImageDesc><br />
                    <S.Bold>append</S.Bold> "0" bit <S.Bold>until</S.Bold> message length in bits ≡ 448 (mod 512)<br />
                    <S.Bold>append</S.Bold> original length in bits <S.Bold>mod</S.Bold> 264 <S.Bold>to</S.Bold> message<br /><br />
                    <S.ImageDesc>Process the message in successive 512-bit chunks:</S.ImageDesc><br />
                    <S.Bold>for each</S.Bold> 512-bit chunk <S.Bold>of</S.Bold> padded message <S.Bold>do</S.Bold><br />
                    break chunk into sixteen 32-bit words M[j], 0 ≤ j ≤ 15<br />
                    <S.ImageDesc>Initialize hash value for this chunk:</S.ImageDesc><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>var</S.Bold> int A := a0<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>var</S.Bold> int B := b0<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>var</S.Bold> int C := c0<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>var</S.Bold> int D := d0<br />
                    <S.ImageDesc>Main loop:</S.ImageDesc><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>for</S.Bold> i <S.Bold>from</S.Bold> 0 <S.Bold>to</S.Bold> 63 <S.Bold>do</S.Bold><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>var</S.Bold> int F, g<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>if</S.Bold> 0 ≤ i ≤ 15 <S.Bold>then</S.Bold><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F := (B <S.Bold>and </S.Bold>C) <S.Bold>or </S.Bold>((<S.Bold>not </S.Bold>B) <S.Bold>and </S.Bold>D)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g := i<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>else if</S.Bold> 16 ≤ i ≤ 31 <S.Bold>then</S.Bold><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F := (D <S.Bold>and </S.Bold>B) <S.Bold>or </S.Bold>((<S.Bold>not </S.Bold>D) <S.Bold>and </S.Bold>C)<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g := (5×i + 1) <S.Bold>mod </S.Bold>16<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>else if</S.Bold> 32 ≤ i ≤ 47 <S.Bold>then</S.Bold><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F := B <S.Bold>xor </S.Bold>C <S.Bold>xor </S.Bold>D<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g := (3×i + 5) <S.Bold>mod </S.Bold>16<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>else if</S.Bold> 48 ≤ i ≤ 63 <S.Bold>then</S.Bold><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F := C <S.Bold>xor </S.Bold>(B <S.Bold>or </S.Bold>(<S.Bold>not </S.Bold>D))<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g := (7×i) <S.Bold>mod </S.Bold>16<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.ImageDesc>Be wary of the below definitions of a,b,c,d</S.ImageDesc><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;F := F + A + K[i] + M[g]  <S.ImageDesc> M[g] must be a 32-bits block</S.ImageDesc><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A := D<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D := C<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;C := B<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B := B + <S.Bold>leftrotate(F, s[i])</S.Bold><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<S.Bold>end for</S.Bold><br />
                    <S.ImageDesc>Add this chunk's hash to result so far:</S.ImageDesc><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;a0 := a0 + A<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;b0 := b0 + B<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;c0 := c0 + C<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;d0 := d0 + D<br />
                    <S.Bold>end for</S.Bold><br /><br />

                    <S.Bold>var </S.Bold>char digest[16] := a0 <S.Bold>append </S.Bold>b0 <S.Bold>append </S.Bold>c0 <S.Bold>append </S.Bold>d0 <S.ImageDesc>Output is in little-endian</S.ImageDesc><br /><br />

                    <S.ImageDesc>leftrotate function definition</S.ImageDesc><br />
                    <S.Bold>leftrotate </S.Bold>(x, c)<br /><br />
                    <S.Bold>return </S.Bold>(x &lt;&lt; c) <S.Bold>binary </S.Bold>or (x &gt;&gt; (32-c));
                </S.Usage>
                <S.ImageDesc>*reference from Wikipidia</S.ImageDesc>
            </S.Row>
        </S.Container>
    )
}

export default FtSSL