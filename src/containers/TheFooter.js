import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      {/* <div>
        <span className="ml-1">&copy; Techartsy 2021.</span>
      </div> */}
      <div className="mfs-auto">
        <span className="mr-1">Techartsy Indonesia &copy; 2021</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
