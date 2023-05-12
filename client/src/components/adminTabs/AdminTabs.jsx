import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import AdminTable from './VendorManegment'
import './admintabs.scss'
const AdminTabs = () => {
  return (
    <>
   
    <Tabs align='center' isFitted  variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab>Fleet Managment</Tab>
    <Tab>Vendor Managment</Tab>
    <Tab>User Role Managment</Tab>
    <Tab>Reports</Tab>
    <hr />
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>Fleet Managment</p>
    </TabPanel>
    <TabPanel>
    <AdminTable />
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
