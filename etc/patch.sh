#!/bin/bash
cd "./etc"

rm -rf ".gitkeep"
cp "../node_modules/@kuwas/etc.pipelines.tpl/dist/.gitkeep" "./"

rm -rf ".gitignore"
rm -rf ".gitignore.max"
cp "../node_modules/@kuwas/etc.pipelines.tpl/dist/.gitignore.max" "./"

rm -rf "_config"
cp "../node_modules/@kuwas/etc.pipelines.tpl/dist/_config.yml" "./"

rm -rf ".travis.yml"
cp "../node_modules/@kuwas/etc.pipelines.tpl/dist/travis/node/.travis.yml" "./"

rm -rf ".travis.yml"
cp "../node_modules/@kuwas/etc.pipelines.tpl/dist/travis/node/.travis.yml" "./"

rm -rf "Dockerfile"
cp "../node_modules/@kuwas/etc.pipelines.tpl/dist/docker/node/Dockerfile" "./"

rm -rf ".editorconfig"
cp "../node_modules/@kuwas/etc.typescript.tpl/dist/editor/.editorconfig" "./"

rm -rf "typedoc.json"
cp "../node_modules/@kuwas/etc.typescript.tpl/dist/typedoc/typedoc.json" "./"

rm -rf "tslint.json"
cp "../node_modules/@kuwas/etc.typescript.tpl/dist/tslint/tslint.json" "./"

rm -rf ".nycrc"
cp "../node_modules/@kuwas/etc.codetests.tpl/dist/nyc/.nycrc" "./"
