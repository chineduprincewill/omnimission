import React, { useState } from 'react'
import BranchList from './components/BranchList'
import CreateBranch from './components/CreateBranch';

const MembershipManagement = () => {

    let [actionstate, setActionstate] = useState();
    let component;

    switch (actionstate) {
        case 'branch-list':
          component = <BranchList setActionstate={setActionstate} />;
          break;
        case 'create-branch':
          component = <CreateBranch setActionstate={setActionstate} />;
          break;
        default:
          component = <BranchList setActionstate={setActionstate} />;
    }

    return (
        <div className='p-4'>
            {component}
        </div>
    )
    }

export default MembershipManagement