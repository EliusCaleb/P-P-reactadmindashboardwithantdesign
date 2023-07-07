import Typography from 'antd/es/typography/Typography'
import React from 'react'

const AppFooter= () => {
  return (
    <div className='appFooter'>
      <Typography.Link href='https://elius-portfolio.netlify.app/#contact' target={'_blank'}>+254789785656</Typography.Link>
      <Typography.Link href='https://elius-portfolio.netlify.app/' target={'_blank'}>Privacy Policy</Typography.Link>
      <Typography.Link href='https://elius-portfolio.netlify.app/' target={'_blank'}>Terms of Use</Typography.Link>
    </div>
  )
}

export default AppFooter