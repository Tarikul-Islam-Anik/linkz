import { useState, useCallback } from 'react'
import Giscus from '@giscus/react'

export default function QNA({ GISCUS_REPO, GISCUS_REPO_ID, GISCUS_CATEGORY_ID }) {
  const [enableLoadComments, setEnabledLoadComments] = useState(false)

  const LoadComments = useCallback(() => {
    return (
      <Giscus
        key={'Comments'}
        repo={GISCUS_REPO}
        repoId={GISCUS_REPO_ID}
        categoryId={GISCUS_CATEGORY_ID}
        category={'Comments'}
        mapping="title"
        strict="1"
        reactions-enabled="1"
        emit-metadata="0"
        input-position="top"
        theme="light"
        lang="en"
        loading="lazy"
      />
    )
  }, [])

  const load = () => {
    setEnabledLoadComments(true)
  }

  return (
    <section>
      <div className="text-mono dark:text-sub-color mx-auto mb-4 flex w-1/2 items-center text-center text-stone-400">
        <hr className="dark:border-sub-color my-2 w-1/2 border-t  border-stone-300/75" />
        <h3 className="mx-4">Q&amp;A</h3>
        <hr className="dark:border-sub-color my-2 w-1/2 border-t border-stone-300/75" />
      </div>
      <div
        onClick={load}
        className="flex w-full cursor-pointer flex-col items-center justify-center space-y-4 rounded-2xl bg-white p-6 font-semibold"
      >
        <span>Ask a question</span>
        {enableLoadComments && LoadComments()}
      </div>
    </section>
  )
}
