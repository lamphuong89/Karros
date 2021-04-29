describe.only('Mocha demo', () => {
           // mocha hoods
           before(() => {
               console.log('before');
           });


    it('test case 1', () => {
         {
             console.log('đay là case #1');
            // throw new Error ('Loi ne');
            
        }
        
    });
    it('test case 2', () => {
         {
             console.log('đay là case #2');
            
        }
        
    });
    it.skip('test case 3', () => {
         {
             console.log('đay là case #3');
            
        }
        
    });

    beforeEach(() => {
        console.log('Before Eachhhhhhhhhhhh');
    });
    after(() => {
        console.log('afteeeeeeeerrrrrrrr');
    });
    
    afterEach(() => {
        console.log('After EACHHHHHHH')
    });
    
});


describe('Mocha demo - cloned', () => {
    it('test case 1', () => {
         {
             console.log('đay là case #1');
            
        }
        
    });
    it('test case 2', () => {
         {
             console.log('đay là case #2');
            
        }
        
    });
    it.skip('test case 3', () => {
         {
             console.log('đay là case #3');
            
        }
        
    });
    
});