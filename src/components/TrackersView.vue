<template>
      <a-table :columns="columns" :data-source="trackers">
   <template #bodyCell="{ column, record }">
      
      <template v-if="column.key === 'lastDateTime'">
        <span>
         {{record.histories.length ==0 ? 'Not Listed':moment(record.histories[0].createDateTime)}}
        </span>
      </template>
        <template v-if="column.key === 'lastRank'">
        <span>
         {{record.histories.length ===0 ? 'Not Listed':record.histories[0].ranks[0]}}
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
           <router-link :to="'/history?key='+record.key" >History</router-link>
        </span>
      </template>
    </template>
     </a-table>
</template>
<script>
import moment from "moment";
import TrackerService from '../Stores/TrackerApi';

export default {
 props: {
    refresh: Boolean
  },
  data() {
    return {
      trackers:[],
       columns :[{
            title: 'Search Keyword',
            dataIndex: 'search',
            key: 'search',
            }, {
            title: 'Url',
            dataIndex: 'url',
            key: 'url',
            }, {
            title: 'Best Latest Rank',
            dataIndex: 'lastRank',
            key: 'lastRank',
            }, 
            {
            title: 'Last DateTime',
            key: 'lastDateTime',
            dataIndex: 'lastDateTime',
            }, {
            title: 'Action',
            key: 'action',
            }]
    }
  },
  async mounted(){
    await  this.fetchTracker();
  },
  methods: {
  moment: function (date) {
    return moment(date).format('DD/MM/YYYY h:mm:ss');
  },
 async fetchTracker(){
    var response =await TrackerService.GetAllTrackers({});
   this.trackers=response.items;
  }
}
}
</script>
