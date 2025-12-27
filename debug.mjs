import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

function getSortedPostsData() {
    if (!fs.existsSync(postsDirectory)) {
        console.log('Directory not found');
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // safe serialization
        const data = JSON.parse(JSON.stringify(matterResult.data));

        return {
            id,
            ...data,
        };
    });

    return allPostsData;
}

console.log(JSON.stringify(getSortedPostsData(), null, 2));
