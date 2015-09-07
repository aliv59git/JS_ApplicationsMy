/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
	*	if there is more than one author print them all sorted in ascending order by fullname
		*   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
    return function (books) {
        var authorsByPopularity = {};

        _.each(books, function (item) {
            var currentAuthorFullName = item.author.firstName + '_' + item.author.lastName;
            var currentAuthorPopularity = authorsByPopularity[currentAuthorFullName];
            if (!currentAuthorPopularity) {
                authorsByPopularity[currentAuthorFullName] = 0;
            }

            authorsByPopularity[currentAuthorFullName] += 1;
        });

        var mostPopularAuthors = [];
        var firstMostPopularAuthorPopularity = authorsByPopularity[_.keys(authorsByPopularity)[0]];

        _.each(authorsByPopularity, function (item) {
            if (item > firstMostPopularAuthorPopularity) {
                firstMostPopularAuthorPopularity = item;
            }
        });

        _.each(authorsByPopularity, function (item, key) {
            if (item === firstMostPopularAuthorPopularity) {
                mostPopularAuthors.push({
                    fullName: key,
                    popularity: item
                })
            }
        });

        mostPopularAuthors = _.sortBy(mostPopularAuthors, function (item) {
            return item.fullName;
        });

        _.each(mostPopularAuthors, function (item) {
            console.log(item.fullName.replace('_', ' '));
        })
    };
}


//other solution
function solve(){
    return function (books) {
        _.mixin({
            multimax: function (arr, compare) {
                var max = _.max(arr, function(v){return v[compare]});
                return _.filter(arr, function(v){return v[compare]==max[compare]});
            }
        });

        var authorsPopularity = [];

        _.chain(books)
            .map(function(book) {
                book.author.fullName = book.author.firstName + ' ' + book.author.lastName;
                book.authorFullName = book.author.fullName;

                return book;
            })
            .groupBy('authorFullName')
            .each(function(books, author) {
                authorsPopularity.push({name: author, books: books.length});
            });

        var maxBooksLength = (_.max(authorsPopularity, function (author) {
            return author.books;
        }));

        _.chain(authorsPopularity)
            .multimax('books')
            .sortBy('name')
            .each(function(author){
                console.log(author.name)
            });
    };
}





module.exports = solve;