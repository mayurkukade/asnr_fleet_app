import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Link} from 'react-router-dom'
import './admintabs.scss'
const AdminTabs = () => {
  return (
    <>
   
    <Tabs align='center' isFitted  variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab Link={'/fleetmanegment'} >Fleet Managment</Tab>
    <Tab  > <Link to={'/vendor'} >Vendor Managment</Link> </Tab>
    <Tab>User Role Managment</Tab>
    <Tab>Reports</Tab>
    <hr />
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>Fleet Managment</p>
    </TabPanel>
    <TabPanel>
   
    </TabPanel>
    <TabPanel>
      <p>User Role Managment</p>
    </TabPanel>
    <TabPanel>
      <p>Reports</p>
    </TabPanel>
   
  </TabPanels>
</Tabs>

    </>
  )
}

export default AdminTabs
