#!/bin/bash
cd "./etc"

rm -rf "_config"
cp "../node_modules/@kuwas/etc.pipelines.tpl/etc/_config.yml" "./"

rm -rf ".travis.yml"
cp "../node_modules/@kuwas/etc.pipelines.tpl/etc/travis/node/.travis.yml" "./"

rm -rf ".gitignore"
rm -rf ".gitignore.max"
cp "../node_modules/@kuwas/etc.pipelines.tpl/etc/.gitignore.max" "./"

rm -rf ".gitkeep"
cp "../node_modules/@kuwas/etc.pipelines.tpl/etc/.gitkeep" "./"
