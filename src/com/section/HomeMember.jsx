import React from 'react';
// component
import {SectionTitle} from 'com/component';
import {ListMember} from 'com/component';

// field
const data = [
  {
    id: 1,
    count: 1,
    date: '2018',
    member: [{
      name: 'taewoong, yoon',
      contact: [
        {
          name: 'web',
          link: 'https://brunch.co.kr/',
        },{
          name: 'instagram',
          link: 'https://brunch.co.kr/',
        },{
          name: 'facebook',
          link: 'https://brunch.co.kr/',
        },{
          name: 'github',
          link: 'https://brunch.co.kr/',
        }
      ]
    },{
      name: 'taewoong, yoon',
      contact: [
        {
          name: 'web',
          link: 'https://brunch.co.kr/',
        },{
          name: 'instagram',
          link: 'https://brunch.co.kr/',
        },{
          name: 'facebook',
          link: 'https://brunch.co.kr/',
        },{
          name: 'github',
          link: 'https://brunch.co.kr/',
        }
      ]
    },{
      name: 'taewoong, yoon',
      contact: [
        {
          name: 'web',
          link: 'https://brunch.co.kr/',
        },{
          name: 'instagram',
          link: 'https://brunch.co.kr/',
        },{
          name: 'facebook',
          link: 'https://brunch.co.kr/',
        },{
          name: 'github',
          link: 'https://brunch.co.kr/',
        }
      ]
    },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      }
    ]
  },{
    id: 2,
    count: 2,
    date: '2018',
    member: [
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },{
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },{
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      }
    ]
  },{
    id: 3,
    count: 3,
    date: '2019',
    member: [
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      },
      {
        name: 'taewoong, yoon',
        contact: [
          {
            name: 'web',
            link: 'https://brunch.co.kr/',
          },{
            name: 'instagram',
            link: 'https://brunch.co.kr/',
          },{
            name: 'facebook',
            link: 'https://brunch.co.kr/',
          },{
            name: 'github',
            link: 'https://brunch.co.kr/',
          }
        ]
      }
    ]
  }
]

const HomeMember = () => {

  const renderData = (data) => {
    return (
      <ul className="wrap-nth">
        {data.map(el => {
          return (
            <li key = {el.id}>
              <h2 className="title-nth div">{makeCount(el.count)}</h2>
              <ul className="wrap-member">
                {el.member.map((item,index) => {
                  return <p key = {index}>{item.name}</p>
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      
    )
  }
  const makeCount = (count) => {
    if(count === 1){
      return '1st';
    }else if(count ===2){
      return '2nd';
    }else if(count === 3){
      return '3rd';
    }else{
      return `${count}th`
    }
  }
  return (
    <div className="HomeMember">
      <div className="con">
        <SectionTitle 
          title = "Who -"
          link = "/member"
        />

        <div className="wrap-member">
          {renderData(data)}
        </div>
      </div>
    </div>
  );
}

export default HomeMember;