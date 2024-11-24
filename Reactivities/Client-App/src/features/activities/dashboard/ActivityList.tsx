import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'
interface Props{
    acitvites: Activity[];
    selectActivities : (id:string) => void;
    deleteActivity: (id: string) =>  void;
}
export default function ActivityList({acitvites,selectActivities,deleteActivity}: Props) {
  return (
   <Segment>
     <Item.Group divided>
      {acitvites.map(activity => (
        <Item key={activity.id}>
            <Item.Content>
                <Item.Header as ='a'>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                    <div>{activity.discription}</div>
                    <div>{activity.city}, {activity.venue}</div>
                </Item.Description>
                <Item.Extra>
                    <Button onClick={() => selectActivities(activity.id)} floated='right' content='View' color='blue' />
                    <Button onClick={() => deleteActivity(activity.id)} floated='right' content='Delete' color='red' />
                    <Label basic content={activity.category} />
                </Item.Extra>
            </Item.Content>
        </Item>
      ))};
     </Item.Group>
   </Segment>
  )
}
