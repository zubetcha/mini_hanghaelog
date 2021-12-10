import React from 'react'

import { Grid, Image, Text } from '../elements'

import FaceIcon from '@mui/icons-material/Face'
import GitHubIcon from '@mui/icons-material/GitHub'

const Footer = (props) => {
  const members = [
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-8hCSfYIK6RvpToNgMJNB-Gexsm2gfIWciOSX1CLFB-yFpcQh7UcvdChVN8WvIW-xvQ1RrDVAEmBqo3T79RY-3Gg4mhaXMTgvjYYAfDpi-MHNdhjFVLOGVF3pTfLqP.png',
      nickname: 'zubetcha',
      blog_url: '',
      github_url: '',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-KqTqvfFl86GbTsCRv5AY-PRoVp9KM6WZwvLkGEO8V-I7vkRzijl8vBGm5LRwQT-cCWIF8nGqKTfCCY0iXWl-py34w1ylAbJPYocLYKkq-IXv6QOFQKcNdxBtiXAXI-0hw2J9tExTUUG8aNnNvz-4YbAAJpkVityygIfsOkk.png',
      nickname: 'zubetcha',
      blog_url: '',
      github_url: '',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-C0ykfrlDx7AkQsLyLcNS-EDEmBTn7nj52wSnvBAmp-bjYIM3RJKVm2mwEI3BrQ-uHozYGHbW35roEHKzF98-WaMM8u1pW2GyKfBCGCZp-CgjGnJ2FTTfWiE3tf7Uj-WW1GTt4cFIfI7aG4zd1o-7EyjSDVlNscTAlYLSHV1.png',
      nickname: 'zubetcha',
      blog_url: '',
      github_url: '',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-dQCYs4n7O99ksXuBIe33-7i6cgyRhMHo2yv48rq19-yFpcQh7UcvdChVN8WvIW-iDeY4KaGvVDVSxCv46Bg-gOLxmc6a6kx5l0AM6k1f-qU1toWj69nUqJJ6wJjRx.png',
      nickname: 'zubetcha',
      blog_url: '',
      github_url: '',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-sFQorI7AcjL4R4gtgerp-trLwpPTwirxVyPPaijwz.png',
      nickname: 'zubetcha',
      blog_url: '',
      github_url: '',
    },
    {
      src: 'https://kimkong2.s3.ap-northeast-2.amazonaws.com/avatar-Qg3LanCVBxmnw9mLCfDC-8hCSfYIK6RvpToNgMJNB-TChgCSU6xSHuNmR2PI7H-yFpcQh7UcvdChVN8WvIW-h7sHVeDMuiqz5RrUBjQS-pWUQMKm2XzZjirTcVib7-TniAAPqhvIe0Zu0INEAl-eAEJrpPbgFVpm4tIqUdp.png',
      nickname: 'zubetcha',
      blog_url: '',
      github_url: '',
    },
  ]
  return (
    <Grid maxWidth="300px" minWidth="150px" height="450px" padding="10px 0 0 0" margin="0">
      <Grid>
        {members.map((member) => {
          return (
            <Grid is_flex>
              <Grid is_flex margin="5px 15px 5px 10px">
                <Grid is_flex width="auto">
                  <Image src={member.src} shape="circle" size="36"></Image>
                  <Text color="#333" size="14px" margin="0">
                    {member.nickname}
                  </Text>
                </Grid>
                <Grid is_flex width="auto">
                  <FaceIcon
                    style={{ margin: '0 8px', color: '#6e6e6e', cursor: 'pointer' }}
                    onClick={() => {
                      window.location.href = ``
                    }}
                  ></FaceIcon>
                  <GitHubIcon
                    style={{ margin: '0 0 0 8px', color: '#6e6e6e', cursor: 'pointer' }}
                    onClick={() => {
                      window.location.href = ``
                    }}
                  ></GitHubIcon>
                </Grid>
              </Grid>
            </Grid>
          )
        })}
      </Grid>

      <Grid margin="20px 0 0 20px" width="auto">
        <Text color="#6e6e6e" size="10px">
          © 2021 HANGHAELOG FROM TEAM 2
        </Text>
      </Grid>
    </Grid>
  )
}

export default Footer
