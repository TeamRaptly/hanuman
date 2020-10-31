for fileToWatch in "package.json" "src/package.json"
do
    if [ $(git diff HEAD@{1}..HEAD@{0} -- "${fileToWatch}" | wc -l) -gt 0 ]; then
        echo
        echo "package.json files have changed... might be time for an npm ci"
        echo
        git diff --color HEAD@{1}..HEAD@{0} -- "${fileToWatch}" | sed 's/^/        /'
        echo
        else
            echo "No changes detected in ${fileToWatch}" 
    fi
done