import React, { useState } from "react";
import styles from './projects.module.scss'
import SearchField from "@/components/SearchField";
import CustomTable from "@/components/CustomTable";
import { tableColumns, tableData } from "./dummyTableData";
function Projects() {
  const [searchText,setSearchText]=useState('')

  return (
    <div className={styles.projectsContainer}>
     <div className={styles.projectsHeader}>
      <h1>Projects</h1>
     </div>
      <div className={styles.projectsActionBar}>
       <div className={styles.projectsActionBar__left}>
       <div className={styles.projectSearch}>
         <SearchField value={searchText} onChange={setSearchText} placeholder="Type project Name/Id"/>
        </div>
       </div>
        <div className={styles.projectsActionBar__right}>
          <button className="btn-secondary mr-10">Filter</button>
          <button className="btn-secondary mr-10"><span>+</span> Add Project</button>
          <button className="btn-secondary mr-10">More</button>
        </div>
      </div>
      <div className={styles.projectsListContainer}>
        <CustomTable columns={tableColumns} data={tableData}/>
      </div>
    </div>
  );
}

export default Projects;
