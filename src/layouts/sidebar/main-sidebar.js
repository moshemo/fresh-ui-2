import React from 'react'
import {
  SidebarBase as Sidebar,
  SidebarTop as Top,
  SidebarMiddle as Middle,
  SidebarBottom as Bottom,
} from './sidebar-styles'

import {
  TopSidebarLinks as TopLinks,
  ViewSiteLink,
  ContentLinks,
} from './sidebar-links'

export const MainSidebar = props => (
  <Sidebar>
    <Top>
      <TopLinks />
    </Top>

    <Middle>
      <ViewSiteLink />
      <ContentLinks />
    </Middle>

    <Bottom></Bottom>
  </Sidebar>
)
