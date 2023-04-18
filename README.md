# CosmoCloud Task for Frontend Freelance Role - Submission by Subhanu Sankar Roy, VIT Vellore


## Schema for the data
```javascript
const blocks = [
  {
    id: 1,
    name: "New Object Block",
    type: "Object",
    required: false,
    level: 1,
    innerBlocks: [
      {
        id: 188,
        name: "New Object Block",
        type: "Object",
        required: false,
        level: 2,
        innerBlocks: [
          {
            id: 18898,
            name: "New Object Block",
            type: "Object",
            required: false,
            level: 3,
            innerBlocks: [],
          },
        ],
      },
      {
        id: 151,
        name: "New Object Block",
        type: "Object",
        required: false,
        level: 2,
        innerBlocks: [],
      },
    ],
  },
  {
    id: 2,
    name: "New Object Block",
    type: "Object",
    required: false,
    level: 1,
    innerBlocks: [],
  },
];

```

Mentioned in the src/data/sample.js file

## Thought Process

- Single Page app.
- One Wrapper component which we can name Interface and this will render all the blocks
- The block info will be stored in an array which will be in the redux store
- Now we can make a block component which will have the props passed down to it as it is being rendered in the Interface component
- There will be reducers in the redux for CRUD operations of the blocks
- The normal blocks can be rendered by mapping the blocks array
- But for the inner blocks we need to recursively check for innerblocks in each block object and then render them
- For reducer functions of the inner blocks, we have recursively find out the parent of the block from the id and then we can perform CRUD


### Hosted Website
[Website](https://cosmocloud-subhanu.netlify.app/)



