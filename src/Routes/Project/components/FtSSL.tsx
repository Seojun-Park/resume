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
    }
}

const FtSSL: React.FC<IProps> = ({ data }) => {
    return (
        <S.Container>
            <S.Head>
                <S.Glogo src={githubLogo} alt="github" />
                <S.Link>: repo</S.Link>
            </S.Head>
            <S.Row>
                <S.SubTitle>Overview</S.SubTitle>
                <S.Description>
                    A miniature implementation of openssl implementing several hashing algorithms, namely:<br />
                    - md5<br />
                    - sha224<br />
                    - sha256<br />
                    - sha512<br /><br />
                    The program can also take flags as arguments, Flags for message digest commands are:<br />
                    -p Echoes STDIN to STDOUT and appends the checksum to the end of the output.<br />
                    -q Quiet mode : only prints out the Hash.<br />
                    -r Reverses the printing order, hash first with the original input/filename appended.<br />
                    -s Signifies a string input<br />
                </S.Description>
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
        </S.Container>
    )
}

export default FtSSL