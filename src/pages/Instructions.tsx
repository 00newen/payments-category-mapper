import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div className='text-left border rounded-xl p-6'>
      <h1>Awesome Instructions</h1>
      <p>
        Ok, so this is a simple app. The idea is sort payments into categories, after doing so you can use the results
        for budgeting purposes.
      </p>
      <p>
        The idea came from the monthly expenses tracking we do with my wife. Where I found myself exporting the data
        from my bank app, using a spread sheet to sort easily trackable payments and then go one by one with the rest.
      </p>
      <p>
        This of course is a bit tedious and there're many transactions that are repetitive, so I'm creating this app to
        go through the exported file and keep accumulating knowledge on all payments that have already been tracked. So
        that I don't have to do them again. Simple enough right?
      </p>
      <p>
        Well, as usual, it always seems simpler than it is. It turns out that the file with all the data doesn't need to
        be only sorted but also checked for missing descriptions or any type of tracking filters you want to keep track
        of.
      </p>
      <p>
        For instance, I've started checking all TXs in my bank app and I'm adding notes when necessary. And I'm also
        checking the file for empty descriptions and for multiple transfers to the same destination that may be of
        different categories. Like all transactions between family members, one TX may be for paying for food in a
        restaurant, while another one may be a gift or clothing or anything else. So, in this case, assuming that all
        TXs to the same destination are of the same type is not helpful. That works for payments, but not for transfers.
      </p>
      <p>Something to keep in mind.</p>
      <h2>How to use this app:</h2>
      <p>
        In the HOME page. You need to load a CSV file and choose what column to use for filtering. After doing that you
        will start seeing each TX in order. You can choose what Category each TX should be applied to. You can also skip
        a TX in case you're not sure or want to deal with it later. Here you will also see a list of all Categories, you
        can add or remove categories and you can also see the calculated expenses of each Category.
      </p>
      <p>
        In the CATEGORY page to see a list of all TXs that are being filtered to the selected Category. In this page,
        you can also find the list of filters that are being used for this Category.
      </p>
      <h2>Roadmap</h2>
      <p>These are not in any specific order. It's just a list of features that I plan to include in the app.</p>
      <div>
        <ul>
          <li>Remove/Change loaded file.</li>
          <li>Change filtering column.</li>
          <li>See list of filters for each Category.</li>
          <li>See list of TXs filtered to each Category.</li>
          <li>Remove/Change filter from/to another Category.</li>
          <li>See list of unfiltered TXs.</li>
          <li>
            Add a DB implementation to store all TX. This one will change the way we handle all TXs, and will require a
            big refactoring
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instructions;
