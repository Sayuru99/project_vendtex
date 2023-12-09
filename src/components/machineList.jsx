import React from 'react';
import VendingCard from './vendingCard';

const MachineList = () => {
  const machines = [
    {
      id: 1,
      name: 'rhTT1',
      defaultImage: 'https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhTT1.i-Cover-2-200x225.jpg',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhTT1.i-Cover-1-200x225.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 2,
      name: 'rhTT3.pro',
      defaultImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhTT3-BLACK-Cover-1-200x225.jpg',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhTT3-BLACK-Cover-2-200x225.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 3,
      name: 'rhFS1.buttons',
      defaultImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS1.buttons-Cover-1-wood-200x225.jpg',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS1.buttons-Cover-2-wood-200x225.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 4,
      name: 'rhFS1.touch21,5',
      defaultImage: 'https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS1.touch215-Cover-1-wood-200x225.jpg ',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS1.touch215-Cover-2-wood-200x225.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 5,
      name: 'rhFS2.touch24',
      defaultImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS2.touch24-Cover-1-wood-200x225.jpg ',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS2.touch24-Cover-2-wood-200x225.jpg ',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 6,
      name: 'rhFS2.touch.32',
      defaultImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS2.touch32-Cover-1-wood-200x225.jpg ',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhFS2.touch32-Cover-2-wood-200x225.jpg ',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 7,
      name: 'rhMFS1.snack',
      defaultImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhMFS1.snack-Cover-1-200x225.jpg ',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhMFS1.snack-Cover-2-200x225.jpg',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
    {
      id: 8,
      name: 'rhMFS1snack&cups',
      defaultImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhMFS1.snackcups-1-200x225.jpg ',
      hoverImage: ' https://www.rheavendors.com/en/wp-content/uploads/2022/05/rhMFS1.snackcups-2-200x225.jpg ',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt fugit quidem animi est asperiores corporis modi incidunt mollitia blanditiis.'
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {machines.map((machine) => (
        <div key={machine.id}>
          <VendingCard
            machineName={machine.name}
            defaultImage={machine.defaultImage}
            hoverImage={machine.hoverImage}
            description={machine.description}
          />
        </div>
      ))}
    </div>
  );
};

export default MachineList;
