export default interface Video{
  id:string,
  title:string,
  thumbnail_360_url:string,
  created_time:number,
  "owner.username":string,
  "owner.avatar_80_url":string,
  views_total:number
}